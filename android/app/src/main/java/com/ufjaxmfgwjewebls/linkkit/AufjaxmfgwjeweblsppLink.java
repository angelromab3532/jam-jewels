package com.ufjaxmfgwjewebls.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class AufjaxmfgwjeweblsppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public AufjaxmfgwjeweblsppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getSufjaxmfgwjeweblsourceUrl() {
    return sourceUrl;
  }

  public List<Target> getTufjaxmfgwjeweblsargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWufjaxmfgwjeweblsebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPacufjaxmfgwjeweblskageName() {
      return packageName;
    }

    public String getCufjaxmfgwjeweblslassName() {
      return className;
    }

    public Uri getUufjaxmfgwjeweblsrl() {
      return url;
    }

    public String getAufjaxmfgwjeweblsppName() {
      return appName;
    }
  }
}
